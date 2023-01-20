import React from 'react';

const AccordionItemComponent = ({lessonName, youtubeUrl, pdfLink, pdfDesc, vocalLink, vocalDesc}) => {
    return (
  <div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
     aria-expanded="true" aria-controls="collapseOne">  {lessonName} </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
   data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className='lesson-body-lesson'>
      <iframe className='youtube-vid' src={youtubeUrl}
       frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share" allowfullscreen>
       </iframe>
       <div className='d-flex flex-column'>
          <a className='d-flex' href={pdfLink}>
          <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Microsoft%20Word.svg"/>
          <p className=''>{pdfDesc}</p></a>
        <div className='d-flex align-items-center'>
            <a className='d-flex' href={vocalLink}>
          <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Voice.svg"/>
          <p>{vocalDesc}</p></a>
          </div>
       </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default AccordionItemComponent;
