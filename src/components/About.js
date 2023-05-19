import React from 'react'

export default function About(props) {
  return (
    <>
      <div className="container my-5" >
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#343434' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2 className="accordion-header">
              <button className="accordion-button" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About Us
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the my first webpage using ReactJs.</strong> This website is used for text Formating Like Upper Case, Lower Case, Copy text the Entered text
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#343434' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Contact Info
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
