import React from 'react'



const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container my-5">
      <h2 className="mb-3 fw-bold">Contact Us</h2>
      <p class="text-start w-responsive fw-bold">Do you have any questions?</p>
      <p class="text-start w-responsive fw-bold mb-5">Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact