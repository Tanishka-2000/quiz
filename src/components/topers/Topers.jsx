import './styles.css'

function Topers() {
  return (
    <div className='topers'>
        <div className='topper top2'>
            <img src='person2.png' />
            <div className='board'>
                <p>2</p>
                <p>442pt</p>
            </div>
        </div>
        <div className='topper top1'>
            <img src='person1.png' />
            <div className='board'>
                <p>1</p>
                <p>453pt</p>
            </div>
        </div>
        <div className='topper top3'>
            <img src='person3.png' />
            <div className='board'>
                <p>3</p>
                <p>433pt</p>
            </div>
        </div>
    </div>
  )
}

export default Topers