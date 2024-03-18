import emailjs from '@emailjs/browser'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import emailData from '../../datas/email'

const StyledContact = styled('div')`
    background-color: ${colors.primary};
    color: #fff;
`
const StyledContainer = styled('div')`
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
`
const StyledTitle = styled('div')`
    width: 40%;
    padding-right: 50px;
`
const StyledSubmit = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const StyledMessage = styled('div')`
    position: absolute;
    top: 91px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.tertiary};
    font-family: ${fonts.colombo};
    font-size: 21px;
    padding: 12px 20px;
    border-radius: 5px;
    z-index: 9999;
    -moz-animation: cssAnimation 0s ease-in 5s forwards;
    -webkit-animation: cssAnimation 0s ease-in 5s forwards;
    -o-animation: cssAnimation 0s ease-in 5s forwards;
    animation: cssAnimation 0s ease-in 5s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    @keyframes cssAnimation {
        to {
            width: 0;
            height: 0;
            overflow: hidden;
            visibility: hidden;
            padding: 0;
        }
    }
    @-webkit-keyframes cssAnimation {
        to {
            width: 0;
            height: 0;
            visibility: hidden;
            visibility: hidden;
            padding: 0;
        }
    }
`
const Spinner = styled('div')`
    margin-left: 20px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    display: inline-block;
    border-left-color: ${colors.tertiary};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`
const StyledForm = styled('form')`
    flex-grow: 1;
    input:not(.button),
    textarea {
        padding: 15px;
        border: #fff 2px solid;
        margin: 15px 0;
        font-size: 20px;
        transition: all 0.3s ease-in-out;
        &:focus {
            outline: none;
            border-color: ${colors.tertiary};
        }
        &::placeholder {
            color: ${colors.black};
            font-family: ${fonts.colombo};
        }
        &::selection {
            background-color: ${colors.tertiary};
            color: #fff;
        }
    }
    input:not(.button) {
        display: block;
        width: 50%;
    }
    textarea {
        width: calc(100% - 34px);
        min-height: 200px;
    }
    .button {
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #fff;
            color: ${colors.tertiary};
        }
    }
`

function Contact() {
    const form = useRef()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState()

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        // Timestamp
        const currentDate = new Date()
        const dateString =
            currentDate.getDate() +
            '-' +
            (currentDate.getMonth() + 1) +
            '-' +
            currentDate.getFullYear() +
            '_' +
            +currentDate.getHours() +
            ':' +
            currentDate.getMinutes() +
            ':' +
            currentDate.getSeconds()
        form.current['timestamp'].value = dateString

        emailjs
            .sendForm(emailData.serviceId, emailData.templateId, form.current, {
                publicKey: emailData.publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                    setMessage('Votre e-mail a été envoyé avec succès!')
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text)
                    setMessage(
                        "Une erreur s'est produite. Veuillez réessayer ultérieusement"
                    )
                }
            )
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <StyledContact className="main">
            <StyledContainer className="container">
                {message && (
                    <StyledMessage className="alert">{message}</StyledMessage>
                )}
                <StyledTitle>
                    <h1>Me contacter</h1>
                    <p>
                        Pour me contacter, vous pouvez utiliser ce formulaire,
                        ou m’écrire directement via mon profil LinkedIn.
                    </p>
                </StyledTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Votre nom *"
                        required
                        // autoComplete="off"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Votre email *"
                        required
                        // autoComplete="off"
                    />
                    <textarea name="message" placeholder="Votre message... *" />
                    <input type="hidden" name="timestamp" />
                    <input type="hidden" name="g-recaptcha-response" />
                    <StyledSubmit>
                        <input
                            type="submit"
                            value="Envoyer"
                            className="button"
                            required
                        />
                        {loading && <Spinner />}
                    </StyledSubmit>
                </StyledForm>
            </StyledContainer>
        </StyledContact>
    )
}

// TODO contact :  captcha
export default Contact
