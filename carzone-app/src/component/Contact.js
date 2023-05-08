import React from 'react'
import Swal from 'sweetalert2'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


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
    console.log(conFom);

    name.value = "";
    email.value = "";
    message.value = "";
    setFormStatus('Send')

Swal.fire({
  title: '<strong>Your message has been sent successfully</strong>',
  text: 'Thank You!',
  icon: 'success'
})
  }
  return (<>
      <div className="d-flex m-5 p-5">
<Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="dark" href="/">
            <h5 className="text-dark">Home</h5>
          </Link>
          <Typography color="text.primary"> <h5 className="text-dark">Contact Us</h5></Typography>
        </Breadcrumbs>
</div>
    <div className="container my-5 shadow-lg">
      <h2 className="mb-3 fw-bold fs-1 text-center">CONTACT US</h2>
      <p class="text-start w-responsive fw-bold fs-3">Do you have any questions?</p>
      <p class="text-start w-responsive fw-bold mb-5 fs-6">Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary btn-lg fw-bold" type="submit">
          {formStatus}
        </button>
      </form>
    </div></>
  )
}
export default Contact