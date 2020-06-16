import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { useState } from 'react'

import Arrow from '../../../../content/assets/compliance/walkthrough/arrow.svg'
import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const [expanded, setExpanded] = useState<number>(0)
  const [active, setLeftQuestion] = useState<number>()

  const sections = [
    {
      topic: 'The Basics',
      contents: [
        {
          title: 'What is PayID?',
          description:
            'PayID is a universal payment identifier that makes it easier for people to send and receive money across any payment network.',
        },
        {
          title: 'Who uses PayID?',
          description: (
            <>
              PayID works across jurisdictions — without a patchwork of central
              registration. Any business that sends and receives money can use
              PayID to give each of their customers a simple and universal ID
              that works across any payment network and makes payments faster
              and easier. PayID is an open and free standard, so anyone can
              build implementations and extensions on top of PayID.
              <Link
                to="/companies"
                className="block mt-6 text-orange-500 focus:underline hover:underline"
              >
                See companies that use PayID
              </Link>
            </>
          ),
        },
        {
          title:
            'How Is PayID compliant with international payment regulations?',
          description:
            'Rather than prescribing a single solution, PayID is flexible and composable by design, which empowers transaction participants to implement their own policies. PayID provides a simple extension that helps businesses satisfy Travel Rule record-keeping required in jurisdictions globally, including both current FinCEN rules and FATF guidance. Protocol extensions also make it easy to comply with a variety of other requirements for transactions involving regulated entities, while PayID also facilitates other compliance needs, such as sanctions screening.',
        },
        {
          title: 'Who created this website?',
          description:
            'The PayID website was created by Ripple, as an early adopter of PayID.',
        },
        {
          title: 'How can I get started with PayID?',
          description:
            'PayID is open source and easy to set up with just a few lines of code. You can explore the documentation and GitHub repository',
        },
      ],
    },
    {
      topic: 'Development',
      contents: [
        {
          title: 'What does PayID implementation involve?',
          description:
            'PayID is a free-to-use, fully open standard with an open source implementation. Any service can start using PayID by integrating a PayID server into their existing infrastructure using the reference implementation on GitHub.',
        },
        {
          title: 'What are the underlying technologies?',
          description:
            'PayID is a web-based protocol built on a simple HTTP API secured by the standard web security stack, such as TLS.',
        },
        {
          title: 'How secure of a standard does it provide?',
          description:
            'PayID leverages tried-and-true security technologies that secure all internet services, including e-commerce and digital banking services. Additionally, PayID messages include cryptographic certificates and signatures that ensure participants in PayID transactions do not need to trust any counterparty.',
        },
        {
          title: 'What is server deployment like?',
          description:
            'PayID is designed by devs for devs. You can deploy a PayID server with just a few commands alongside existing web infrastructure then integrate it into an application or account system in just a few lines of code. PayID also includes a variety of tools that makes managing the server after deployment easy.',
        },
      ],
    },
  ]

  return (
    <Wave spacing="sm" waveClassNames="faq-bg">
      <div className="max-w-4xl pt-16 lg:pt-70">
        <h1 className="text-4xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex mt-20 sm:mt-30">
        {/* Left Nav */}
        <div className="hidden mr-8 sm:block sm:w-56 md:w-72 md:mr-32 lg:-ml-16">
          <div className="sticky top-20">
            {sections.map((section, sectionIndex) => {
              return (
                <div className="mb-6" key={sectionIndex}>
                  <button
                    className={classNames(
                      'text-xs font-bold hover:text-orange-500 focus:text-orange-500 focus:outline-none align-middle',
                      {
                        'text-orange-500': expanded === sectionIndex,
                        'text-gray-200': expanded !== sectionIndex,
                      },
                    )}
                    disabled={expanded === sectionIndex}
                    onClick={(): void => {
                      setExpanded(sectionIndex)
                      setLeftQuestion(undefined)
                    }}
                  >
                    {section.topic}
                    <Arrow
                      className={classNames(
                        'h-2 ml-4 duration-500 transform inline-block',
                        {
                          'rotate-90': expanded === sectionIndex,
                          '-rotate-90': expanded !== sectionIndex,
                        },
                      )}
                    />
                  </button>
                  {expanded === sectionIndex && (
                    <div className="block mt-2 ml-4">
                      {section.contents.map((content, contentIndex) => {
                        return (
                          <a
                            key={contentIndex}
                            className={classNames(
                              'block mb-2 text-xs font-bold hover:text-orange-500 focus:text-orange-500 outline-none',
                              {
                                'text-orange-500': contentIndex === active,
                                'text-gray-200': contentIndex !== active,
                              },
                            )}
                            href={`#${content.title}`}
                            onClick={(): void => setLeftQuestion(contentIndex)}
                          >
                            {content.title}
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:max-w-md">
          {sections.map((section, sectionIndex) => {
            return (
              <div className="mt-20 sm:mt-30 first:mt-0" key={sectionIndex}>
                <h2 className="mb-10 text-3xl font-bold sm:text-4xl sm:mb-14">
                  {section.topic}
                </h2>
                {section.contents.map((content, contentIndex) => {
                  return (
                    <div key={contentIndex}>
                      <h3
                        className="mt-10 text-2xl font-bold sm:mt-12"
                        id={content.title}
                      >
                        {content.title}
                      </h3>
                      <p className="mt-4">{content.description}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Introduction