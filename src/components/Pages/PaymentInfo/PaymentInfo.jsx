import React from 'react'

const PaymentInfo = () => {
  return (
    <form>
        <div className="formDivider">
            <div className="formContainer">
            <label>Plan</label>
            <input className='inputs' type='text' disabled />
            <label>Service Mode</label>
            <input className='inputs' type='text' disabled />
            </div>

            <div className="formContainer">
            <label>Plan</label>
            <input className='inputs' type='text' disabled />
            <label>Service Mode</label>
            <input className='inputs' type='text' disabled />
            </div>
        </div>
    </form>
  )
}

export default PaymentInfo