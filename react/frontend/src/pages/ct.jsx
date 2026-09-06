import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
   <>
   <Navbar/>
<div>
  <div className="contact" style={{backgroundColor: 'rgb(234, 172, 172)', width: '35%', height: '55%', marginLeft: 80}}>
    <div className="container">
      <h2 className="c" style={{marginTop: 50, textAlign: 'center', fontFamily: 'Meeriweather'}}><u>CONTACT</u></h2>
      <h4 className="c" style={{marginTop: 30, textAlign: 'center', fontFamily: 'Meeriweather'}}>Contact us for any query</h4>
      <div className="row mb-6">
        <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" style={{marginLeft: 25, marginTop: 20}}>NAME</label>
        <div className="col-sm-6">
          <input type="name" className="form-control form-control-sm" id="colFormLabelSm" style={{marginTop: 20, width: '100%'}} />
        </div>
        <div className="row mb-6">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" style={{marginLeft: 30, marginTop: 20}}>EMAIL</label>
          <div className="col-sm-6">
            <input type="name" className="form-control form-control-sm" id="colFormLabelSm" style={{marginTop: 20, width: '100%'}} />
          </div>
        </div>
        <div className="row mb-6">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" style={{marginLeft: 30, marginTop: 20}}>PHONE</label>
          <div className="col-sm-6">
            <input type="name" className="form-control form-control-sm" id="colFormLabelSm" style={{marginTop: 20, width: '100%'}} />
          </div>
        </div>
        <div className="row mb-6">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" style={{marginLeft: 30, marginTop: 20}}>ADDRESS 1</label>
          <div className="col-sm-6">
            <input type="name" className="form-control form-control-sm" id="colFormLabelSm" style={{marginTop: 20, width: '100%'}} />
          </div>
        </div>
        <div className="row mb-6">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" style={{marginLeft: 30, marginTop: 20}}>ADDRESS 2</label>
          <div className="col-sm-6">
            <input type="name" className="form-control form-control-sm" id="colFormLabelSm" style={{marginTop: 20, width: '100%'}} />
          </div>
        </div>
        <div className="row mb-6">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" style={{marginLeft: 30, marginTop: 20}}>CITY</label>
          <div className="col-sm-6">
            <input type="name" className="form-control form-control-sm" id="colFormLabelSm" style={{marginTop: 20, width: '100%'}} />
          </div>
        </div>
        <div className="row mb-6">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm" style={{marginLeft: 30, marginTop: 20}}>STATE</label>
          <div className="col-sm-6">
            <input type="name" className="form-control form-control-sm" id="colFormLabelSm" style={{marginTop: 20, width: '100%'}} />
          </div>
        </div>
        <div className="col-auto" style={{marginTop: '50PX', marginLeft: '220PX', width: '100%'}}>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
</div>
<Footer/>
   </>
  )
}

export default Contact