import windInsuranceImg from '../assets/windstorm.png'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <div className="max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato']">
        <div className="mb-60 md:mb-80">
          <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold">Elevate Your Insurance Experience with Web 3 Technology</h1>
            <p className="text-[20px] text-center mt-8">
              Unleash the power of blockchain for comprehensive wind and flight insurance coverage. <br />
              Welcome to Go Insure, where insurance meets innovation on the Web 3 frontier. We've redefined the way you experience coverage,
              focusing on the wind and beyond. Whether it's wind-related damages or flight mishaps, our Web 3 insurance platform has you
              covered.
            </p>
          </div>
          <div className="text-center mt-20">
            <button className="h-[60px] px-20 border-b-2 border-l-2 outline-0 text-[20px] text-[#FFFFFF] bg-[#737373] font-bold">
              <span className="text-[20px]">
                <Link to="/about">Learn More</Link>
              </span>
              <span className="inline-block ml-10 -mb-2">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#737373] text-[#FFFFFF]">
        <div className="max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato']">
          <div className="flex items-center bg-[#737373] text-[#FFFFFF] py-10">
            <div className="basis-1/2">
              <h1 className="text-[40px] md:text-[50px] lg:text-[60px] leading-[50px]">
                Insurance <br /> for everyone
              </h1>
            </div>
            <div className="basis-1/2 flex justify-end">
              <img src={windInsuranceImg} className="w-[500px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] my-40 font-['Lato']">
        <div className="flex justify-center">
          <div className="">
            <p className="text-[#737373] md:text-[24px] text-[20px] font-[500] leading-[30px] tracking-[0.2px] text-center">
              Join the waitlist today and be the first to <br /> know when we launch!
            </p>
            <div className="">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="flex flex-col md:flex-row mt-[40px]">
                  <div className="mr-0 md:mr-8">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-[100%] mb-[20px] md:mb-[0px] mb-4 md:w-[357px] md:h-[60px] h-[60px] px-[37px] py-[13px] outline-0 border border-solid border-[#C1C1C1] placeholder:text-[#A5A5A5] placeholder:text-[18px] font-['Sora'] font-[400]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-[100%] mb-[20px] md:mb-[0px] mb-4 md:w-[357px] md:h-[60px] h-[60px] px-[37px] py-[13px] outline-0 border border-solid border-[#C1C1C1] placeholder:text-[#A5A5A5] placeholder:text-[18px] font-['Sora'] font-[400] bg-[#737373] text-[#FFFFFF]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#737373] text-[#FFFFFF] py-20">
        <div className="max-w-[100%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] font-['Lato']">
          <div className="bg-[#737373] text-[#FFFFFF] py-10">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] leading-[50px] text-center pt-8 mb-[100px]">Features</h1>

            <div className="">
              <div className="flex flex-col lg:flex-row text-[#333333]">
                <div className="basis-1 mr-0 lg:basis-[32%] lg:mr-[2%] leading-[24px] pl-[30px] pr-[30px] py-[40px] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.06)] mb-4 lg:mb-0">
                  <h1 className="font-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10 text-[#FFFFFF]">Policy Creation</h1>
                  <p className="leading-[30px] text-[#FFFFFF]">Users can create insurance policies</p>
                </div>
                <div className="basis-1 mr-0 lg:basis-[32%] lg:mr-[2%] leading-[24px] pl-[30px] pr-[30px] py-[40px] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.06)] mb-4 lg:mb-0">
                  <h1 className="font-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10 text-[#FFFFFF]">Policy Management</h1>
                  <p className="leading-[30px] text-[#FFFFFF]">
                    Users can view their active policies, track their coverage amounts, and monitor expiration dates.
                  </p>
                </div>
                <div className="basis-1 lg:basis-[32%] leading-[24px] pl-[30px] pr-[30px] py-[40px] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.06)]">
                  <h1 className="ont-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10 text-[#FFFFFF]">Claim Submission</h1>
                  <p className="leading-[30px] text-[#FFFFFF]">
                    Users can submit insurance claims when covered events occur, following predefined conditions
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row text-[#333333] mt-8">
                <div className="basis-1 lg:basis-[32%] lg:mr-[2%] leading-[24px] pl-[30px] pr-[30px] py-[40px] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.06)]">
                  <h1 className="ont-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10 text-[#FFFFFF]">Claim Processing</h1>
                  <p className="leading-[30px] text-[#FFFFFF]">
                    Claims are automatically evaluated and processed based on the implemented smart contract logic.
                  </p>
                </div>
                <div className="basis-1 lg:basis-[32%] leading-[24px] pl-[30px] pr-[30px] py-[40px] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.06)]">
                  <h1 className="ont-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10 text-[#FFFFFF]">Payouts</h1>
                  <p className="leading-[30px] text-[#FFFFFF]">
                    Approved claims result in automatic payout transfers to the insured parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
