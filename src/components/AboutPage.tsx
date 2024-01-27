import React from 'react'

const AboutPage = () => {
  return (
    <div className="max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato'] mt-20 mb-40 text-[20px]">
      <div>
        <h1 className="capitalize text-4xl text-center">go insure</h1>
        <p className="mt-4 mb-20">
          Go Insure is a decentralized insurance application built on Algorand blockchain technology using the Goracle protocol. It aims to
          provide an alternative and transparent approach to traditional insurance by leveraging the benefits of decentralization and smart
          contracts.
        </p>
      </div>

      <div className="mb-20">
        <h1 className="capitalize text-4xl text-center">Problems with Traditional Insurance</h1>
        <p className="mt-4">
          Go Insure is a decentralized insurance application built on Algorand blockchain technology using the Goracle protocol. It aims to
          provide an alternative and transparent approach to traditional insurance by leveraging the benefits of decentralization and smart
          contracts.
        </p>
        <p className="my-4">Traditional insurance has several limitations and issues such as:</p>
        <ol className='list-decimal'>
          <li className="mb-2">
            Lack of Transparency: Traditional insurance processes often lack transparency, making it challenging for policyholders to
            understand how premiums are calculated, claims are evaluated, and decisions are made.
          </li>
          <li className="mb-2">
            Slow Claim Processing: Traditional insurance claims often involve manual processes, leading to delays, and disputes between the
            insurer and the insured.
          </li>
          <li className="mb-2">
            Limited Access: Traditional insurance may exclude certain individuals or groups due to high premiums, bureaucracy, lack of
            coverage options for specific risks, or geographical restrictions.
          </li>
          <li className="mb-2">
            Trust Dependency: Traditional insurance relies on centralized entities, such as insurance companies, to administer policies,
            process claims, and handle funds. This centralized model can lead to issues of trust, potential conflicts of interest, and
            single points of failure.
          </li>
        </ol>
      </div>

      <div className="mb-20">
        <h1 className="capitalize text-4xl text-center">Advantages of a Decentralized Solution</h1>
        <p className="my-4">A decentralized insurance solution offers several benefits:</p>
        <ol className='list-decimal'>
          <li className="mb-2">
          Transparency and Trustlessness: Decentralized insurance is built on blockchain technology, providing transparent and immutable records of policies, claims, and payouts. Smart contracts execute the predefined rules, ensuring transparency and reducing the need for trust in intermediaries.
          </li>
          <li className="mb-2">
          Automated Claim Processing: Claims in decentralized insurance are processed automatically based on the predefined conditions in smart contracts. This eliminates bureaucracy, reduces processing times, and minimizes the potential for disputes.
          </li>
          <li className="mb-2">
          Access for All: Decentralized insurance has the potential to provide coverage options for individuals or groups that are underserved by traditional insurance, offering more inclusive and affordable solutions.
          </li>
          <li className="mb-2">
          Enhanced Security: Blockchain technology provides robust security measures, reducing the risks of fraud, data manipulation, and unauthorized access to sensitive information.
          </li>
          <li className="mb-2">
          Elimination of Intermediaries: Decentralized insurance removes the need for traditional intermediaries, reducing costs, and increasing efficiency. This direct interaction between participants can result in lower premiums and faster payouts.</li>
        </ol>
      </div>

    </div>
  )
}

export default AboutPage
