
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
type Props = {

}

const View: React.FC<Props> = ({ }: Props) => {


  return (
    <div style={{ backgroundColor: "#6D6E71", height: '100%' }}>
      <Link to="/">
        <button style={{ backgroundColor: "#6D6E71", color: 'white', border: 'unset' }}>
          <AiOutlineClose style={{ width: '25px', height: "30px", marginTop: "10px" }} />
        </button>
      </Link>
      <p style={{ margin: "0", textAlign: 'center', fontSize: '22px' }}>ReportTypes</p>
    </div>
  )
}

export default View;