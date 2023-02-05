import React from 'react';
import { Accordion } from "react-bootstrap";

const NewAccordionItem = ({eventKey, lessonName, youtubeUrl, pdfLink, pdfDesc, vocalLink, vocalDesc}) => {
    return (
        <div>
             <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{lessonName} &nbsp;&nbsp;&nbsp; </Accordion.Header>
        <Accordion.Body>
        <div className='lesson-body-lesson'>
          { !youtubeUrl && <p className='not-exist-text'>لا يتوفر فيديو للدرس</p>}
             { youtubeUrl && <iframe className='youtube-vid' src={youtubeUrl}> </iframe> }
      
       <div className='d-flex flex-column'>
        <br/>
          <a className='file-item' href={pdfLink}>
          <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Microsoft%20Word.svg"/>
          <p className=''>{pdfDesc}</p></a>

        <div className='file-item'>
        <a className='d-flex' href={vocalLink}>
          <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Microsoft%20Word.svg"/>
          <p className=''>{vocalDesc}</p></a>
          {/* {
            vocalLink && <a className='d-flex' href={vocalLink}>
            <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Voice.svg"/>
            <p>{vocalDesc}</p></a>
          }
          { !vocalLink &&  <p className='not-exist-text'>لا يتوفر تسجيل صوتي للدرس</p>} */}
          </div>
       </div>
      </div>         
        </Accordion.Body>
      </Accordion.Item>
        </div>
    );
}

export default NewAccordionItem;
