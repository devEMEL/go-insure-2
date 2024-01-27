import { useWallet } from '@txnlab/use-wallet'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { showConnectModal } from '../services/features/connectModal/connectModalSlice'
import { ellipseAddress } from '../utils/ellipseAddress'

const Navbar = () => {
  const dispatch = useDispatch()
  const { activeAccount, activeAddress, providers } = useWallet()

  return (
    <div className="shadow-lg shadow-indigo-500/40">
      <div className="max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato']">
        <nav className="py-5 capitalize w-full mb-10">
          <div className="flex justify-between items-center">
            <div className="text-[40px]">
              <Link to="/">GoInsure</Link>
            </div>
            <div className="">
              <button className="capitalize mr-6 pb-1 border-b-2 border-[#737373]">
                <Link to="/services">Services</Link>
              </button>
              <button className="capitalize mr-10 pb-1 border-b-2 border-[#737373]">
                <Link to="/about">About</Link>
              </button>
              {activeAccount && <button className="capitalize py-4 px-10 rounded-full">{ellipseAddress(activeAddress)}</button>}
              <button
                className="h-[50px] px-10 border-0 outline-0 rounded-full text-[#FFFFFF] bg-[#737373] font-bold shadow-lg shadow-indigo-500/40"
                onClick={
                  !activeAccount
                    ? () => {
                        dispatch(showConnectModal());
                        console.log("show connect modal")
                      }
                    : () => {
                        providers?.map((provider) => provider.disconnect())
                      }
                }
              >
                {!activeAccount ? 'Connect wallet' : 'Disconnect Wallet'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
