export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "Username required"
    }

    if(!values.email) {
        errors.email = "Email required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if(!values.subject) {
        errors.subject = "Subject is required"
    }

    if(values.message.length < 10) {
        errors.message = "Message needs to be 10 characters or more"
    }

    return errors
}