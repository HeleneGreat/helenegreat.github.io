import emailjs from '@emailjs/browser'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import emailData from '../../datas/email'
import { Link } from 'react-router-dom'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { breakpoints } from '../../utils/css-breakpoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledContact = styled('div')`
    background-color: ${colors.primary};
    color: #fff;
`
const StyledContainer = styled('div')`
    padding-top: 50px;
    padding-bottom: 50px;
    @media screen and ${breakpoints.laptop} {
        display: flex;
    }
`
const StyledTitle = styled('div')`
    padding-bottom: 15px;
    @media screen and ${breakpoints.laptop} {
        padding-bottom: 0px;
        width: 40%;
        padding-right: 50px;
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 40px;
    margin-top: 20px;
    @media screen and ${breakpoints.tablet} {
        font-size: 50px;
        transition: all 0.4s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    }
`
const StyledSubmit = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
    @media screen and ${breakpoints.laptop} {
        margin-top: 30px;
    }
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
        padding: 10px;
        border: #fff 2px solid;
        margin: 15px 0;
        font-size: 18px;
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
        @media screen and ${breakpoints.laptop} {
            font-size: 20px;
            padding: 15px;
        }
    }
    input:not(.button) {
        display: block;
        width: calc(100% - 34px);
        @media screen and ${breakpoints.laptop} {
            width: 50%;
        }
    }
    textarea {
        min-width: calc(100% - 34px);
        max-width: calc(100% - 34px);
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
    iframe {
        @media only screen and (max-width: 351px) {
            transform: scale(0.77);
            transform-origin: 0 0;
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
        // console.dir(form.current, { depth: null })
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
                    <Link
                        to="https://www.linkedin.com/in/hélène-carriou/"
                        title="Profil LinkedIn"
                        target="_blank"
                    >
                        <StyledFontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </StyledTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Votre nom *"
                        required
                        autoComplete="off"
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

export default Contact
