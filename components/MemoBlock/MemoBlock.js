import './MemoBlock.css';

const MemoBlock = ({animating, handleMemoClick, memoBlock}) => (
    <div className="memo-block" onClick={() => (!memoBlock.flipped && !animating) && handleMemoClick(memoBlock)}>
        <div className={`memo-block-inner ${memoBlock.flipped && 'memo-block-flipped'}`}>
            <div className="memo-block-front">
            </div>
            <div className="memo-block-back">
 
           
             <img src={memoBlock.emoji} width="70px" height="70px" alt="Descripción de la imagen"/>

            </div>
        </div>
    </div>
)
 
export default MemoBlock;