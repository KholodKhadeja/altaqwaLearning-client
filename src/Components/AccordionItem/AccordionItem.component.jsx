import React from 'react';

const AccordionItemComponent = ({key,lessonName, youtubeUrl, pdfLink, pdfDesc, vocalLink, vocalDesc}) => {
    return (
  <div className="accordion-item">
  <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
     aria-expanded="true" aria-controls="collapseOne">  {lessonName} </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
   data-bs-parent="#accordionExample">
    <div className="accordion-body">
      <div className='lesson-body-lesson'>
          { !youtubeUrl && <p className='not-exist-text'>لا يتوفر فيديو للدرس</p>}
             { youtubeUrl && <iframe className='youtube-vid' src={youtubeUrl}> </iframe> }
      
       <div className='d-flex flex-column'>
          <a className='d-flex' href={pdfLink}>
          <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Microsoft%20Word.svg"/>
          <p className=''>{pdfDesc}</p></a>
        <div className='d-flex align-items-center'>
          {
            vocalLink && <a className='d-flex' href={vocalLink}>
            <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Voice.svg"/>
            <p>{vocalDesc}</p></a>
          }
          { !vocalLink &&  <p className='lesson-body-lesson'>لا يتوفر تسجيل صوتي للدرس</p>}
          </div>
       </div>
      </div>


      
    </div>



  </div>
</div>
    );
}

export default AccordionItemComponent;
