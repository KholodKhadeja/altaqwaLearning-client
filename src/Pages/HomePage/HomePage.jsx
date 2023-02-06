import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import AccordionItemComponent from "../../Components/AccordionItem/AccordionItem.component";
import "./maincontainer.scss";
import { Accordion } from "react-bootstrap";
import NewAccordionItem from "Components/AccordionItem/NewAccordionItem";
import Spinner from 'react-bootstrap/Spinner';

let lessonsArray = [];
const HomePage = () => {
    const [currentLessons, setCurrentLessons] = useState(lessonsArray);

    useEffect(() => {
        (async () => {
          try {
            let { data } = await axios.get("api/lessons");
            lessonsArray = data;
            setCurrentLessons(lessonsArray);
            // console.log(data[0]);
          } catch (err) {
          }
        })();
      }, []);

    return (
        <Fragment>
        <div className='shadow-lg mb-3'>
        <ul className="nav nav-tabs fw-semibold main-nav" id="myTab" role="tablist">
<li className="nav-item" role="presentation">
<button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
  عن البرنامج</button>
</li>

<li className="nav-item" role="presentation">
<button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" 
    aria-controls="pills-profile" aria-selected="false">الدروس</button>
</li>

<li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
     aria-controls="pills-contact" aria-selected="false">كتب</button>
</li>
</ul>


<div className="tab-content" id="pills-tabContent">
<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
    <p className="basic-parag">
      <b>
    برنامج العلم الشرعي: </b><br/>
التعليم عبارة عن محاضرة أسبوعية، في كل محاضرة ندرس ثلاثة علوم شرعية، وكل علم من هذه العلوم ينتهي خلال شهر أو شهر ونصف.. ثم نبدأ بعلوم أخرى..<br/>
فخلال سنة نكون قد حصّلنا قرابة الـ 9 علوم إسلامية أقل أو أكثر. (من عقيدة، وفقه، وتاريخ، وسيرة، وعلوم قرآن، وعلوم الحديث، والأصول والقواعد الفقهية، واللغة العربية..الخ)<br/>
وخلال هذه السنة ستُقام امتحانات لكل علم وشهادة رمزية تفيد تخطي المتعلم هذه المرحلة من التعلُّم (وجوائز لمَن يجتاز).<br/>
وخلال هذه السنة سيتم وضع برنامج قرائي (مطالعة ذاتية لكتب متنوعة في العلم الشرعي) مع محفزات وتشجيعات وجوائز ..<br/>
نسأل الله أن يوفقنا ويعيننا. <br/>
مكان التعليم الوجاهي: في مدينة الطيرة المثلث.<br/>
يشرف الاستاد مهدي قاسم - إمام وخطيب مسجد التقوى  على المساق.<br/>
<b>
سيتم حتلنة الموقع بالمواد التعليمية بشكل أسبوعي.</b><br/>
    </p>
</div>


<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
  <p className="basic-parag">
    <br/>
    لمعاينة المستندات المرفقة لكل درس، يجب النقر على عنوان كل درس،    <br/>
    تتوفر مستندات  تلخيصيّة لمحاضرة الفقة ومحاضرة العقيدة كل على حدة.
     </p>
     {
     lessonsArray.length ==0 && (<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)} 
    <Accordion defaultActiveKey="0">
     {  lessonsArray.length !==0 && currentLessons.map((item, index)=>(
        <NewAccordionItem
        eventKey={index + 1}
        lessonName={item.lessonName}
        youtubeUrl={item.youtubeUrl}
        pdfLink={item.pdfLink}
        pdfDesc={item.pdfDesc}
         vocalLink={item.vocalLink}
          vocalDesc={item.vocalDesc}
          num={item.num}
        />))}
    </Accordion>
</div>

<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
    <ul className="list-group">
  <li className="list-group-item"><a href="https://archive.org/details/WAQmkaim">
    ماذا خسر العالم بانحطاط المسلمين</a></li>

    <li className="list-group-item"><a 
    href="https://www.alukah.net/library/0/152470/%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%A3%D9%86-%D9%84%D8%A7-%D8%A5%D9%84%D9%87-%D8%A5%D9%84%D8%A7-%D8%A7%D9%84%D9%84%D9%87-pdf/">
    شهادة أن لا إله إلا الله
  </a></li>

  <li className="list-group-item"><a 
    href="https://www.kotobati.com/book/reading/37ffcce2-e8c2-4ced-88e4-3295cb026e42">
    الطريق إلى القرآن
  </a></li>
  
{/* 
    <li class="list-group-item"><a href="https://archive.org/details/WAQmkaim">
    ماذا خسر العالم بانحطاط المسلمين</a></li> */}
</ul>
</div>
</div>
</div>
    </Fragment>
    );
}

export default HomePage;
