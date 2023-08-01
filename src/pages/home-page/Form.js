import React, { useState } from 'react';

const FormBlock = () => {

    // Placeholder
    const [formData, setFormData] = useState({
        civility: '',
        lastname: '',
        firstname: '',
        postalcode: '',
        city: '',
        email: '',
        phone: '',
        rgpd: '',
    });

    // Required Fields
    const [errors, setErrors] = useState({
        civility: '',
        lastname: '',
        firstname: '',
        postalcode: '',
        city: '',
        email: '',
        phone: '',
        rgpd: '',
    });

   
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear the error when the user starts typing again
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form validation
        const newErrors = {};
        if (formData.civility.trim() === '') {
            newErrors.civility = 'Civility is required.';
        }
        if (formData.lastname.trim() === '') {
            newErrors.lastname = 'Last Name is required';
        }
        if (formData.firstname.trim() === '') {
            newErrors.firstname = 'First Name is required';
        }
        if (formData.postalcode.trim() === '') {
            newErrors.postalcode = 'Postal Code is required';
        }
        if (formData.city.trim() === '') {
            newErrors.city = 'City is required';
        }

        // Validate email using regex pattern
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        // Validate email field not empty
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
        }

        const phonePattern = /^(?:\+0?33|0)[\.\- ]*([0-9][\.\- ]*){9}$/;
        if (formData.phone.trim() === '') {
            newErrors.phone = 'Phone is required';
        } else if (!formData.phone.match(phonePattern)) {
            newErrors.phone = 'Please enter a valid phone no.';
        }

        if (formData.rgpd.trim() === '') {
            newErrors.rgpd = 'RGPD is required.';
        }

        // If there are errors, display them and prevent form submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Form data is valid, proceed with form submission
            console.log(formData);
            // Submit the form or perform further actions here
            const registrationForm                  = document.querySelector('.registration')
            const successMessage                    = document.querySelector('.form__confirm') 
            registrationForm.classList.add('hidden')
            successMessage.classList.add('visible')
        }
    };

    return(
        <section className="siteForm">
            <div className="siteForm__container">
                <div className="siteForm__inner">
                    <form className="form registration" onSubmit={handleSubmit}>
                        <div className="form__block form__block--moreSpace">
                            <p className="form__label--inline">Civilité*</p>
                            <input
                                type="radio"
                                name="civility"
                                value="Madame"
                                id="civility__mrs"
                                checked={formData.civility === 'Madame'}
                                onChange={handleChange}
                            />
                            <label htmlFor="civility__mrs">Mme</label>
                            <input
                                type="radio"
                                name="civility"
                                value="Monsieur"
                                id="civility__mr"
                                onChange={handleChange}
                            />
                            <label htmlFor="civility__mr">M.</label>
                            {errors.civility && <span className="radio-error">{errors.civility}</span>}
                        </div>
                        <div className="form__block">
                            <input
                                className="form__input"
                                value={formData.lastname}
                                onChange={handleChange}
                                type="text"
                                name="lastname"
                                placeholder="Votre nom *"
                            />
                            {errors.lastname && <span className="error">{errors.lastname}</span>}
                        </div>
                        <div className="form__block">
                            <input
                                className="form__input"
                                value={formData.firstname}
                                onChange={handleChange}
                                type="text"
                                name="firstname"
                                placeholder="Votre prénom *"
                            />
                            {errors.firstname && <span className="error">{errors.firstname}</span>}
                        </div>
                        <div className="form__block">
                            <input
                                className="form__input"
                                type="text"
                                value={formData.postalcode}
                                onChange={handleChange}
                                name="postalcode"
                                placeholder="Votre code postal *"
                            />
                            {errors.postalcode && <span className="error">{errors.postalcode}</span>}
                        </div>
                        <div className="form__block">
                            <input
                                className="form__input"
                                type="text"
                                name="city"
                                placeholder="Votre ville *"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <span className="error">{errors.city}</span>}
                        </div>
                        <div className="form__block">
                            <input
                                className="form__input"
                                type="text"
                                name="email"
                                placeholder="Votre e-mail *"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form__block">
                            <input
                                className="form__input"
                                type="tel"
                                name="phone"
                                placeholder="Votre téléphone *"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                        </div>
                        <div className="form__block">
                            <input
                                type="checkbox"
                                name="rgpd"
                                value="1"
                                id="rgpd"
                                onChange={handleChange}
                            />
                            <label htmlFor="rgpd">Mentions RGPD</label>
                            {errors.rgpd && <span className="checkbox-error">{errors.rgpd}</span>}
                        </div>
                        <input type="hidden" name="type" value="inscription" />
                        <div className="form__submit">
                            <button className="form__submit__button" type="submit">je m'inscris</button>
                        </div>
                        <p className="form__required">* Champs obligatoires</p>
                    </form>
                    <p className="form__confirm">Merci, votre demande a bien été prise en compte.</p>
                </div>
            </div>
        </section>
    )

}

export default FormBlock;