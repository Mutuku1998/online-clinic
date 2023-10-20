import React from 'react'

const Contact = () => {
  return (
  <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center'>
        Contact Us
      </h2>
<p className='mb-8 lg:mb-16 font-light text-center text_para'>
  Got a technical issue? Let us know to better the future experience

</p>
<form action=''>
  <div>
    <label htmlFor='email' className='form_label'>
      Your email
    </label>
    <input 
    type='email'
    placeholder='martinmtuk@gmail.com'
    id='email'
    className='form_input mt-1'/>

  </div>
  <div>
    <label htmlFor='subject' className='form_label'>
      Subject
    </label>
    <input 
    type='text'
    placeholder='Let us how we can help'
    id='subject'
    className='form_input mt-1'/>

  </div>
  <div className='sm-col-span-2'>
    <label htmlFor='email' className='form_label'>
     Message
    </label>
    <textarea
    rows="5"
    type='text'
    placeholder='write message...'
    id='message'
    className='form_input mt-1'/>

  </div>
  <button
    type = " submit" className='btn text-white font-[600] rounded sm:w-fit'>
    Send <i class="ri-mail-send-line"></i>
  </button>
</form>

    </div>
  </section>
  )
}

export default Contact