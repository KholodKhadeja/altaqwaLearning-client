import React, { Fragment } from 'react';
import AccordionItemComponent from "../AccordionItem/AccordionItem.component";
import "./maincontainer.scss";

const MainCenteredContain = () => {
    return (
        <Fragment>
            <div className='shadow-lg mb-3'>
            <ul className="nav nav-tabs fw-semibold" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
     role="tab" aria-controls="home-tab-pane" aria-selected="true">الدروس</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" 
    role="tab" aria-controls="profile-tab-pane" aria-selected="false">الدورات</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" 
    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"> كتب للإثراء</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" 
    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">اختبارات</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" 
  tabindex="0">
    {/* **********************ACCORDION************************* */}
    <div class="accordion" id="accordionExample">
            <AccordionItemComponent />
  {/* <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
       aria-expanded="true" aria-controls="collapseOne">
       الدرس الأوّل - مقدمة في العقيدة والفقه
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
     data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className='lesson-body-lesson'>
        <iframe className='youtube-vid' src="https://www.youtube.com/embed/jL2QeeOum2A" 
         frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share" allowfullscreen>
         </iframe>
         <div className='d-flex flex-column'>
            <a className='d-flex' href="https://drive.google.com/file/d/1Jvi9hxvG2iSHKTjNc6UmZz2zFJPUfqpo/view?usp=share_link">
            <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Microsoft%20Word.svg"/>
            <p className=''>الدرس الأوّل - مقدمة في العقيدة والفقه - تلخيص</p></a>
          <div className='d-flex align-items-center'>
            <img src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/8c50e78b606104cada5e985a22d07b648b1bb8d2/src/images/Voice.svg"/>
            <p>ملف صوتي</p>
            </div>
         </div>
        </div>
      </div>
    </div>
  </div> */}

</div>
{/* *******************************the end of the accordion ******************************** */}
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
   tabindex="0">
   {/* embed image- coming soon */}
    </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
   tabindex="0">
       {/* embed image- coming soon */}
    </div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
   tabindex="0">
      {/* embed image- coming soon */}
    </div>
</div>

</div>
        </Fragment>
    );
}

export default MainCenteredContain;
