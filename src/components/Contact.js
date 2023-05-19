import React from 'react';

export default function Contact(props) {
  return (
    <>
    <div className='container my-5' style={{ color:props.mode==='dark'? 'white':'black'}}>
      <form action="">
   <div className=" mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" style={{backgroundColor: props.mode==='dark'? 'gray':'white', color:props.mode==='dark'? 'white':'black'}} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'? 'gray':'white', color:props.mode==='dark'? 'white':'black'}} rows="3"></textarea>
</div>
<div className='mb-3'>
    <button>Submit</button>
</div>
</form>
</div>
    </>
  )
}
