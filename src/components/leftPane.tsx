
import lodash from 'lodash';

const LeftPane = (props: any) => {
    const { setCurrConv, allconvList, currentConv } = props;
    return <div className="flex flex-col bg-[#EDF2F6] f-full w-[260px]">
        <div className="flex items-center h-[40px] text-black ">
            <img src="https://app.regie.ai/favicon.png" alt="Regie Logo" className="h-[25px] ml-[7px] mr-[5px] text-sm text-token-text-primary"/>
            Regie
        </div>
        <div className="flex items-center bg-[#BDE3F8] text-[#464F5E] h-[45px] pl-[7px] rounded justify-center text-sm hover:bg-[#eeeee4]" onClick={() => setCurrConv()}>
            New Convo
        </div>
        <div className='mt-[10px] pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-secondary text-gray-500'> Available Files</div>
        <div>
        {allconvList.map((conv: any) => {
            const className = 'flex justify-start items-center text-gray-400 pl-[7px] hover:bg-slate-300 hover:text-white h-[40px] text-xm ' + (currentConv === conv.conversationId ? 'bg-white' : '')
            return <div onClick={() => setCurrConv(conv.conversationId)} className={className} key={conv.conversationId}>
                <div>{lodash.capitalize(conv.fileName)}</div>
            </div>
        })}
        </div>
    </div>
}

export default LeftPane;