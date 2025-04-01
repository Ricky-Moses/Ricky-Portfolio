import React, { useEffect, useState } from 'react'
import tagImg from '../Image/Typography.png'
import formImg from '../Image/Form_html.png'
import formTagImg from '../Image/Form_tag.png'
import nestImg from '../Image/Nested.png'
import cssStyles from '../Image/CSS_internal_inline.png'
import cssLayout from '../Image/CSS-layout.png'
import cssGrid from '../Image/Grid-Layouts.png'
import cssAnimation from '../Image/Animation_css.png'


const skills = [
  { name: 'HTML', progress: '90', color: '#dc3545' },
  { name: 'CSS', progress: '80', color: '#0d6efd' },
  { name: 'JS', progress: '70', color: '#ffc107' },
]

const htmlDetails = [
  {
    title: 'HTML',
    descOne: `I started learning "HTML" from the very basic, beginning with understanding how tags define the structure of a webpage. At first, I explored simple element link <h1> to <h6> for headings, <p> for paragraphs.`,
    descTwo: `And learned about <span> and <div> for organizing content. As I got comfortable, I learned how element are nested within each other to create a proper document structure.`,
    descThree: `Next, I focused on attributes, which add extra functionality to elements. I understand how the ' class ' and ' id ' attributes help with styling and Javascript interactions. I explored the ' src ' attributes for images and iframes, ' href ' for links, ' alt ' for accessibility, and many others that enhance the behavior of ' HTML  ' elements.`,
    descFour: `Once I had a strong grasp of these fundamentals, I started working with forms. I learned how to create various input fields using <input>, <textarea> and <button>. I also explored form validation technique using like ' required ', ' maxlength ', and ' patter '. This helped me understand how user interactions work on a webpage.`,
    descFive: `One of the most exciting parts was learning how to embed content using iframes. I discovered how to integrate external websites, Youtube videos, Google Maps, and other resources directly into my web pages using the <iframe> element. This made my projects more interactive and engaging.`,
    descSix: `I also experimented with adding images using the <img> tag, optimizing them with different formats and sizes for better performance. Typography became an important aspect, and I explored how to style text using different fonts, colors, and spacing to improve readability.`,
    descSeven: `Throughout this journey, I kept discovering new elements and best practices, refining my skills with every project. HTML became the foundation of web development knowledge, preparing me to dive deeper into CSS, JS, and modern web technologies.`,

    tagImage: tagImg,
    formImage: formImg,
    formTagImage: formTagImg,
    nestedImage: nestImg

  }
];

const cssDetails = [
  {
    title: `CSS`,
    descOne: `When I started learning CSS, I first explored fundamental properties like colors, fonts, and spacing, experimenting with inline, internal, and external styles to understand their differences.`,
    descTwo: `As I progressed, I encountered challenges in structuring layouts effectively, which led me to the box model, where I learned how <b> padding </b>, <b> margins </b>, and <b> borders </b> define an element's space. This understanding laid the foundation for more advanced layouts technique like <b>Flexbox and Grid</b> which revolutionized the way I designed web pages. Learning <b> media queries </b> became essential to ensure responsiveness, making my layouts adapt seamlessly to different screen sizes.`,
    descThree: `I discovered animations and transition, which added an interactive layer to my designs, making them more dynamic and visually appealing.`,
    descFour: `To better illustrate these concepts, I plan to include visuals that demonstrate how Flexbox and Grid work in <b> real-world scenarios </b>. Instead of a traditional approach, I want to showcase my journey -- How I initially struggled with layouts but gradually mastered them through hands-on experimentation. For example, <b> Flexbox made alignment </b> and spacing easier by allowing elements to adjust dynamically in either a row or column layouts. Understanding properties like <b> justify-content </b> and <b> align-items </b> helped me control spacing effortlessly, while <b> flex-wrap </b> allowed elements to adapt across different screen sizes. It was fascinating to see how a few well-placed properties could create clean, organized layouts without relying on outdated float-based positioning.`,
    titleTwo: 'BOOTSTRAP',
    descFive: `In additional to custom styling, I explored <b> Bootstrap </b>, while significantly accelerated my development process. Instead of writing repetitive CSS, Bootstrap's utility classes handled <b> spacing </b>, <b> typography </b>, and <b> responsiveness </b> effortlessly. Pre-built components like <b> girds </b>, <b> modals </b>, and <b> buttons </b> allowed me to focus more to functionality rather than starting from scratch with every design. While I initially preferred writing everything manually, I realized how Bootstrap could complement my CSS knowledge by providing a faster and more efficient workflow.`,
    cssStyleImg: cssStyles,
    structureImg: cssLayout,
    gridLayoutImg: cssGrid,
    animationImg: cssAnimation
  }
];

const jsDetails = [
  {
    title: 'JAVASCRIPT',
    descOne: `When I first started learning <b> Javascript (JS) </b>, it felt completely different from <i> HTML </i> and <i> CSS </i>. While those languages focused on structure and styling, Javascript added interactively, allowing web pages to respond to user actions dynamically. Initially, concepts like <b> Variables </b>, <b> Functions </b>,and <b> loops </b> were challenging, but I quickly realized that mastering them was essential for writing efficient code.`,
    descTwo: `At first, I struggled with understanding how Javascript runs in the browser and how it interacts with HTML and CSS. The <b><i>DOM(Document Object Model)</i></b> was a game-changer for me --I Learned that every HTML element could be accessed, modified, and manipulated using Javascript. One of my first experiments was changing the text of a button when clicked, and seeing it work in real-time felt like magic!`,
    titleTwo: `Background Color Swap: `,
    titleThree: `Number Guessing: `,
    descThree: `Building this project helped me understand loops, conditionals, and user inputs handling in Javascript.`,
    titleFour: `Expanding My Javascript Knowledge`,
    descFour: `Once I got comfortable with basic syntax, I explored events, which made my web pages more interactive. Simple things like <b> Click: <i> events, mouse hover effects, and keyboard inputs </i> </b> helped me understanding how user interacts with websites. I learned how to use <b> addEventListener </b> to handle user actions without writing messy inline Javascript. <br> As I progressed, I discovered conditional statements(<b> if-else, switch </b>) and loops (<b> for, while </b>), which allowed me to create dynamic behavior. One of my first real-world applications was building a simple form validation -- checking if a user had entered their email correctly before submitting. <br> One of my biggest breakthroughs was learning about arrays and objects. Arrays helped me store multiple values in a single variable, and objects allowed me to structure data more efficiently. I started experimenting with array methods like <b> map(), filter(), and reduce() </b>, which completely changed how I handled data. Instead of using long <b> for </b> loops, I could now write cleaner, more readable code with just a few lines!`
  }
]

const Skill = () => {

  const [progressBar, setProgressBar] = useState(skills.map(() => 0))
  const [activeTab, setActiveTab] = useState('HTML')

  useEffect(() => {
    const interval = skills.map((skill, index) => (
      setInterval(() => {
        setProgressBar((prev) => {
          if (prev[index] >= skill.progress) return prev;
          return prev.map((value, i) => (i === index ? Math.min(value + 1, skill.progress) : value))
        })
      }, 50)
    ));

    return () => interval.forEach(clearInterval)
  }, [progressBar])

  console.log(progressBar)

  return (
    <>

      <div className='skill container-fluid'>

        <div className="skill-progress d-flex align-items-center flex-column justify-content-center py-2 gap-4 card">

          <h1>My Skill</h1>
          {
            skills.map(({ name, color }, index) => (
              <div key={name} className='skill-list d-flex align-items-center'>
                <div className='skill-item me-2'>
                  <label htmlFor="" style={{ color: color }}>{name}</label>
                  <span className='ms-2' style={{ color: color }}>{`${progressBar[index]}`}%</span>
                  <div className='progress-bar mb-2'>
                    <div style={{ width: `${progressBar[index]}%`, backgroundColor: color }} className="progress-value"></div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

        <div className="skill-details card text-center overflow-y-scroll">
          <div className="card-header sticky-top z-3">
            <ul className="nav nav-tabs card-header-tabs">
              {['HTML', 'CSS', 'JS'].map((tab) => (
                <li className='nav-item' key={tab}>
                  <button className={`nav-link ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
                </li>
              ))}
            </ul>
          </div>
          {
            activeTab === 'HTML' && htmlDetails.map(({
              title, descOne, descTwo, descThree, descFour, descFive, descSix, descSeven, tagImage, nestedImage, formImage, formTagImage,
            }) => (

              <div className="card-body" key={title}>

                <h4 className="card-title">{title}</h4>
                <p className="card-text text-start">{descOne}</p>
                <div className='border w-50 my-2'>
                  <img className='img-fluid' src={tagImage} alt="" />
                </div>
                <p className="card-text text-start">{descTwo}</p>
                <div className='border w-100 my-2'>
                  <img className='img-fluid' src={nestedImage} alt="" />
                </div>
                <p className="card-text text-start">{descThree}</p>
                <div className='border w-100 my-2'>
                  <img className='img-fluid' src={formImage} alt="" />
                </div>
                <p className="card-text text-start">{descFour}</p>
                <div className='border w-100 my-2'>
                  <img className='img-fluid' src={formTagImage} alt="" />
                </div>
                <p className="card-text text-start"><b>{descFive} <br /> {descSix}</b></p>
                <p className="card-text text-start"><i>{descSeven}</i></p>
              </div>

            ))
          }
          {
            activeTab === 'CSS' && cssDetails.map(({
              title, descOne, descTwo, descThree, descFour, titleTwo, descFive, cssStyleImg, structureImg, gridLayoutImg, animationImg
            }) => (
              <div className='card-body' key={title}>

                <h4 className='card-title'>{title}</h4>
                <p className="card-text text-start">{descOne}</p>
                <div className='border w-75 my-2'>
                  <img className='img-fluid' src={cssStyleImg} alt="" />
                </div>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descTwo }}></p>
                <div className='border w-75 my-2'>
                  <img className='img-fluid' src={structureImg} alt="" />
                </div>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descThree }}></p>
                <div className='border w-50 my-2'>
                  <img className='img-fluid' src={animationImg} alt="" />
                </div>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descFour }}></p>
                <div className='border w-75 my-2'>
                  <img className='img-fluid' src={gridLayoutImg} alt="" />
                </div>
                <h4 className='card-title text-start'>{titleTwo}</h4>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descFive }}></p>
              </div>
            ))
          }
          {
            activeTab === 'JS' && jsDetails.map(({ 
              title, descOne, descTwo, titleTwo, titleThree, descThree, titleFour, descFour
             })=>(
              <div className='card-body' key={title}>
                <h4 className='card-title'>{title}</h4>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descOne }}></p>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descTwo }}></p>
                <h4 className='card-title text-start'>{titleTwo}</h4>
                <iframe className='w-100 h-25 border p-2' src='https://Ricky-Moses.github.io/Ricky-Portfolio/color_swap/index.html' frameborder="0"></iframe>
                <h4 className='card-title text-start'>{titleThree}</h4>
                <iframe className='w-100 h-25 border p-2' src='https://Ricky-Moses.github.io/Ricky-Portfolio/Random_number/index.html' frameborder="0"></iframe>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descThree }}></p>
                <h4 className='card-title text-start'>{titleFour}</h4>
                <p className="card-text text-start" dangerouslySetInnerHTML={{ __html: descFour }}></p>
              </div>
            ))
          }
        </div>

      </div>


    </>
  )
}

export default Skill