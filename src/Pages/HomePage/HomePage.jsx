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
<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
  عن البرنامج</button>
</li>

<li className="nav-item" role="presentation">
<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" 
    aria-controls="pills-profile" aria-selected="false">الدروس</button>
</li>

<li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
     aria-controls="pills-contact" aria-selected="false">كتب</button>
</li>
</ul>


<div className="tab-content" id="pills-tabContent">
<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
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


<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
  <p className="basic-parag">
    <br/>
    لمعاينة محتوى الدروس، يجب النقر على عنوان كل درس</p>
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
      </div>
</div>

<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
    <ul class="list-group">
  <li class="list-group-item"><a href="https://archive.org/details/WAQmkaim">
    ماذا خسر العالم بانحطاط المسلمين</a></li>

    <li class="list-group-item"><a href="https://ar.islamway.net/book/19058/%D9%84%D8%A7-%D8%A5%D9%84%D9%87-%D8%A5%D9%84%D8%A7-%D8%A7%D9%84%D9%84%D9%87-%D8%B9%D9%82%D9%8A%D8%AF%D8%A9-%D9%88%D8%B4%D8%B1%D9%8A%D8%B9%D8%A9-%D9%88%D9%85%D9%86%D9%87%D8%A7%D8%AC-%D8%AD%D9%8A%D8%A7%D8%A9">
    لا إله إلا الله عقيدة وشريعة ومنهاج حياة
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
