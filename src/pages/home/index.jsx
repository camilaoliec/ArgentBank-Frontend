import './style.scss'
import Features from '../../components/features'
import chatICon from '../../assets/icons/icon-chat.png'
import moneyIcon from '../../assets/icons/icon-money.png'
import securityIcon from '../../assets/icons/icon-security.png'

function Home () {
    return (
        <main>
            <section className='banner_container'>
                <div className='banner__img'>
                    <div className='banner__content'>
                    <h2 className='sr-only'>Promoted Content</h2>
                    <p className='banner__subtitle'> No fees.</p>
                    <p className='banner__subtitle'> No Minimum deposit.</p>
                    <p className='banner__subtitle'>High interest rates.</p>
                    <p className='banner__text'>Open a savings account with Argent Bank today!</p>
                    </div>
                </div>
            </section>
            <section className='features'>
                <Features
                    image={chatICon}
                    alt='Chat icon'
                    title="You are our #1 priority"
                    text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <Features
                    image={moneyIcon}
                    alt='Money icon'
                    title="More savings means higher rates"
                    text="The more you save with us, the higher your interest rate will be!"
                />
                <Features
                    image={securityIcon}
                    alt='Security icon'
                    title="Security you can trust"
                    text="We use top of the line encryption to make sure your data and money is always safe."
                />
            </section>
        </main>
    )
}

export default Home