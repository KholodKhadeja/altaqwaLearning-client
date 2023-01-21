import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import AccordionItemComponent from "../../Components/AccordionItem/AccordionItem.component";
import "./maincontainer.scss";


let lessonsArray = [];
const HomePage = () => {
    const [currentLessons, setCurrentLessons] = useState(lessonsArray);

    useEffect(() => {
        (async () => {
          try {
            let { data } = await axios.get("api/lessons");
            lessonsArray = data;
            setCurrentLessons(lessonsArray);
            console.log(data[0]);
          } catch (err) {
          }
        })();
      }, []);

    return (
        <Fragment>
        <div className='shadow-lg mb-3'>
        <ul className="nav nav-tabs fw-semibold" id="myTab" role="tablist">
<li className="nav-item" role="presentation">
<button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
 role="tab" aria-controls="home-tab-pane" aria-selected="true">الدروس</button>
</li>

<li className="nav-item" role="presentation">
<button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" 
type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"> كتب وروابط</button>
</li>
<li className="nav-item" role="presentation">
<button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" 
type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">اختبارات</button>
</li>
</ul>
<div className="tab-content" id="myTabContent">
<div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" 
tabIndex={0}>
{/* **********************ACCORDION************************* */}
<div className="accordion mb-2" id="accordionExample">
    {currentLessons.map((item)=>(
        <AccordionItemComponent key={"less"+item._id}
        lessonName={item.lessonName}
        youtubeUrl={item.youtubeUrl}
        pdfLink={item.pdfLink}
        pdfDesc={item.pdfDesc}
         vocalLink={item.vocalLink}
          vocalDesc={item.vocalDesc}
          num={item.num}
        />
    ))}
      
{/* *******************************the end of the accordion ******************************** */}
</div></div>



<div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
tabIndex={0}>
    {/* book tab */}
    <ul class="list-group">
  <li class="list-group-item"><a href="https://archive.org/details/WAQmkaim">
    ماذا خسر العالم بانحطاط المسلمين</a></li>
</ul>
</div>

<div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab"
tabIndex={0}>
   <p>محتوى هذا الصفحة متوفر للأعضاء فقط</p>
</div>
</div>
</div>

    </Fragment>
    );
}

export default HomePage;
