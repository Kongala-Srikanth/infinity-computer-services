// Write your code here.
import {Component} from 'react'
import FaqItems from '../FaqItems'
import './index.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What services do you offer?',
    answerText:
      `
      We offer a wide range of computer services including:
      Operating System (OS) installation,
      Software installation and setup,
      Data recovery from hard drives, SSDs, and storage devices,
      Hardware upgrades for improved performance (RAM, storage, graphics card, etc.),
      System troubleshooting to diagnose and fix performance issues,
      System formatting and reinstallation of OS,
      Virus and malware removal to ensure your system's security,
      Custom-built computers tailored to your specifications and
      CPU cleaning service to prevent overheating and optimize performance
      `,
  },
  {
    id: 1,
    questionText: 'How can I request your services?',
    answerText:
      'You can request our services by contacting us via phone at 7075960802 or email at ksrikanthyadav789@gmail.com. Alternatively, you can fill out the contact form on our website to schedule an appointment.',
  },
  {
    id: 2,
    questionText:
      'What should I do if my computer is running slow?',
    answerText:
      ` If your computer is running slow, it could be due to various reasons such as low system resources, software conflicts, or malware. We recommend scheduling a system troubleshooting appointment to diagnose the issue and recommend appropriate solutions.
      `,
  },
  {
    id: 3,
    questionText: `Can you recover data from a corrupted hard drive?`,
    answerText:
      `Yes, we specialize in data recovery services and can often recover data from corrupted or damaged hard drives. Contact us for a consultation and assessment of your specific situation.`,
  },
  {
    id: 4,
    questionText: `How often should I clean my computer's CPU?`,
    answerText:
      `We recommend cleaning your computer's CPU (central processing unit) and internal components every 6 to 12 months to prevent dust buildup and maintain optimal performance.`,
  },
  {
    id: 5,
    questionText: `Can you build a custom computer according to my requirements?`,
    answerText:
      ` Absolutely! We offer custom-built computer services where we work closely with you to understand your needs and preferences, then assemble a computer that meets your specifications.`,
  },
  {
    id: 6,
    questionText: `What antivirus software do you recommend?`,
    answerText:
      `We can recommend reputable antivirus software based on your specific needs and budget. Our experts can also assist with antivirus installation and setup to protect your system from threats.`,
  },
  {
    id: 7,
    questionText: `Do you offer on-site services or remote support?`,
    answerText:
      `Yes, we provide both on-site services (for certain repairs and installations) and remote support to address software-related issues or provide guidance without the need for an in-person visit.`,
  },
  
]


class Faqs extends Component {
  state = {allFaqList: []}

  componentDidMount() {
    // const {faqsList} = faqsList

    this.setState({
      allFaqList: faqsList.map(each => ({
        id: each.id,
        isShow: false,
        questionText: each.questionText,
        answerText: each.answerText,
      })),
    })
  }

  onDisplay = id => {
    this.setState(prevState => ({
      allFaqList: prevState.allFaqList.map(each => {
        if (each.id === id) {
          return {...each, isShow: !each.isShow}
        }
        return each
      }),
    }))
  }

  render() {
    const {allFaqList} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">FAQs</h1>
          <ul>
            {allFaqList.map(each => (
              <li key={each.id} className="faq-card">
                <div>
                  <h1 className="question">{each.questionText}</h1>
                  {each.isShow && <FaqItems key={each.id} answers={each} />}
                </div>
                <button type="button" onClick={() => this.onDisplay(each.id)}>
                  {each.isShow ? (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                      alt="minus"
                      className="icon"
                    />
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                      alt="plus"
                      className="icon"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
