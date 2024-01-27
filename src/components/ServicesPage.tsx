// @ts-nocheck
import { FormEvent, useEffect, useState, useRef } from 'react'
import { GoInsureClient } from '../contracts/go_insure'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'
import * as algokit from '@algorandfoundation/algokit-utils'
import { useWallet } from '@txnlab/use-wallet'
import { useSnackbar } from 'notistack'
import algosdk from 'algosdk'

const ServicesPage = () => {
  //   const [area, setArea] = useState<number>(479832604)
  const [area, setArea] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  // const [amount, setAmount] = useState<number>(0)
  const [myPolicy, setMyPolicy] = useState<Array<object>>([])
  const [appId, setAppId] = useState<number>(568154344)

  const { enqueueSnackbar } = useSnackbar()
  const { signer, activeAddress, activeAccount } = useWallet()
  const algodConfig = getAlgodConfigFromViteEnvironment()
  const algodClient = algokit.getAlgoClient({
    server: algodConfig.server,
    port: algodConfig.port,
    token: algodConfig.token,
  })

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const sender = { signer, addr: activeAddress! }

  
  const goInsureClient = new GoInsureClient(
    {
      resolveBy: 'id',
      id: appId,
      sender,
    },
    algodClient,
  )

  const handleCreate = async () => {
    await goInsureClient.create.bare()
    const goInsureClientAppId = (await goInsureClient.appClient.getAppReference()).appId
    setAppId(Number(goInsureClientAppId))
    await goInsureClient.appClient.fundAppAccount(algokit.microAlgos(200_000))
    await goInsureClient.bootstrap({})
    console.log(goInsureClientAppId)
  }



  async function getMyPolicy() {
    const _policy = []
    for (let boxName of await goInsureClient.appClient.getBoxNames()) {
      console.log(boxName)
      const result = await goInsureClient.appClient.getBoxValue(boxName)
      console.log(result)

      const resultCodec = algosdk.ABIType.from('(address,uint64,bool,uint64,uint64,string,uint64,string,string,string)')
      const val = resultCodec.decode(result)

      console.log(val)
      let policy = {
        premAmount: Number(val[1] as string),
        activeStatus: val[2],
        registrationDate: Number(val[3]),
        expirationDate: Number(val[4]),
        claimedStatus: val[5],
        amountClaimed: Number(val[6]),
        area: String(val[7]),
        state: String(val[8]),
        country: String(val[9]),
      }
      console.log(policy)
      console.log(val[0])
      _policy.push(policy) //comment later after fixing with localStorage
      if (activeAccount?.address) {
        if (val[0] == activeAccount?.address) {
          console.log('hello')

          _policy.push(policy)
        }
      }
    }
    console.log(_policy)
    setMyPolicy(_policy)
    return _policy
  }

  const convertToDateTime = (timestamp) => {
    let dateFormat = new Date(timestamp * 1000)
    return ''.concat(
      dateFormat.getDate(),
      '/',
      dateFormat.getMonth() + 1,
      '/',
      dateFormat.getFullYear(),
      ' ',
      dateFormat.getHours(),
      ':',
      dateFormat.getMinutes(),
      ':',
      dateFormat.getSeconds(),
    )
  }
  const _params = await algodClient.getTransactionParams().do(),
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    
    const appAddress = (await goInsureClient.appClient.getAppReference()).appAddress
    const _seed = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: String(activeAddress),
      to: appAddress,
      amount: BigInt(algosdk.algosToMicroalgos(1)),
      suggestedParams: _params,
    })
    try {
      if (!(area && state && country)) {
        enqueueSnackbar(`Error: Make sure all fields are set.`, { variant: 'error' })
        return
      } else {
        await goInsureClient.appClient.fundAppAccount(algokit.microAlgos(1_000_000))

        const purchasePolicy = await goInsureClient.purchasePolicy(
          {
            pay_txn: _seed,
            area: String(area),
            state: String(state),
            country: String(country),
          },
          {
            boxes: [algosdk.decodeAddress(activeAccount?.address).publicKey],
            sendParams: { fee: algokit.microAlgos(200_000) },
          },
        )
        console.log(purchasePolicy)
        enqueueSnackbar(`Policy purchased successfully`)
      }
    } catch (e) {
      enqueueSnackbar(`Error purchasing policy: ${(e as Error).message}`, { variant: 'error' })
      return
    }
  }

  useEffect(() => {
    getMyPolicy()
  }, [])
  return (
    <div>
      <div className="max-w-[94%] md:max-w-[80%] xl:max-w-[60%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato'] my-20">
        <div className="capitalize text-4xl flex justify-center py-5">purchase Policy</div>
        <div className="border-2 border-black-100 rounded-[50px] p-10 mb-10">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-5">
              <label htmlFor="area" className="text-2xl capitalize">
                Area
              </label>
              <div className="mt-3">
                <input
                  type="text"
                  name="area"
                  id="area"
                  className="w-[100%] h-[50px] text-[16px] p-5 border-2 outline-0 bg-[#f8f6fe] rounded-lg"
                  onChange={(e) => {
                    setArea(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="state" className="text-2xl capitalize">
                State
              </label>
              <div className="mt-3">
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="w-[100%] h-[50px] text-[16px] p-5 border-2 outline-0 bg-[#f8f6fe] rounded-lg "
                  onChange={(e) => {
                    setState(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="country" className="text-2xl capitalize">
                Country
              </label>
              <div className="mt-3">
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="w-[100%] h-[50px] text-[16px] p-5 border-2 outline-0 bg-[#f8f6fe] rounded-lg "
                  onChange={(e) => {
                    setCountry(e.target.value)
                  }}
                />
              </div>
            </div>
            {/*
          <div className="mb-5">
            <label htmlFor="amount" className="text-2xl capitalize">
              Amount
            </label>
            <div className="mt-3">
              <input
                type="text"
                name="amount"
                id="amount"
                className="w-[100%] h-[50px] text-[16px] p-5 border-2 outline-0 bg-[#f8f6fe] rounded-lg "
                onChange={(e) => {
                  setAmount(e.target.value as unknown as bigint)
                }}
              />
            </div>
          </div> */}

            <button
              type="submit"
              className="w-[100%] h-[50px] border-2 outline-0 rounded-full bg-[#737373] text-[16px] text-[#ffffff] font-bold shadow-lg shadow-indigo-500/40"
            >
              Purchase Policy
            </button>
          </form>
        </div>
      </div>
      {/* DISPLAY POLICIES */}
      <div className="max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] text-[#737373] font-['Lato'] mt-20 mb-40 text-[20px]">
        {/* MY INSURANCE */}
        <div className="flex justify-center align-center">
          <h2 className="text-bold text-2xl underline mt-10 p-2">MY INSURANCE</h2>
        </div>
        {/* INSURANCE TABLE */}

        <div className="flex justify-center align-center mt-10">
          <table className="shadow-lg bg-white text-2x">
            <thead>
              <tr>
                <th className="bg-blue-100 border text-left px-8 py-4">Premium Amount</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Active Status</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Registration Date</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Expiration Date</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Claim Status</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Amount Claimed</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Area</th>
                <th className="bg-blue-100 border text-left px-8 py-4">State</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Country</th>
              </tr>
            </thead>
            <tbody>
              {myPolicy &&
                myPolicy.map((policy) => (
                  <tr className="border px-8 py-4">
                    <td className="border text-center px-8 py-4">{algosdk.microalgosToAlgos(policy.premAmount)}</td>
                    <td className="border text-center px-8 py-4">{policy.activeStatus ? 'True' : 'False'}</td>
                    <td className="border text-center px-8 py-4">{convertToDateTime(policy.registrationDate)}</td>
                    <td className="border text-center px-8 py-4">{convertToDateTime(policy.expirationDate)}</td>
                    <td className="border text-center px-8 py-4">{policy.claimedStatus}</td>
                    <td className="border text-center px-8 py-4">{algosdk.microalgosToAlgos(policy.amountClaimed)}</td>
                    <td className="border text-center px-8 py-4">{policy.area}</td>
                    <td className="border text-center px-8 py-4">{policy.state}</td>
                    <td className="border text-center px-8 py-4">{policy.country}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <button onClick={() => handleCreate()}>create app</button> */}
    </div>
  )
}

export default ServicesPage
