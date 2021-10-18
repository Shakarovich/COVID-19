import styled from 'styled-components'
import Lottie from './lottie/lottie'

const Reject_style = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      width: 100%;
      text-align: center;
    }
`
const Lottie_style = styled.div`
     width: 50%;
`
export default function Reject() {
    return (
        <Reject_style>
          <Lottie_style>
          <Lottie/>
          <h1>
            You must be vaccinated
          </h1>
          </Lottie_style>
        </Reject_style>
    )
}
