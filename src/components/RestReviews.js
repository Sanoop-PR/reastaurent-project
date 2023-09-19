import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap';


function RestReviews({reviews}) {
    // console.log(reviews)
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant='light'
        >
          <span className='fs-5'>click here for client reviews</span>
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            {
                reviews?.map(item=>(
                    <div className='border p-2 mt-2'>
                        <h5>{item.name} : (<span>{item.date}</span>)</h5>
                        <p>Rating : {item.rating} </p>
                        <p>Comments : {item.comments}</p>
                    </div>
                ))
            }
          </div>
        </Collapse>
      </>
    );
}

export default RestReviews