const Answer = (props: any) => {
    const { answer } = props;

    if(answer.length == 0){
        return <></>
    }

    return <div className="flex w-full flex-row items-start mt-[12px]">
        
            <img src="https://app.regie.ai/favicon.png" alt="Regie Logo" className="h-[25px] ml-[7px] mr-[5px] text-sm text-token-text-primary"/>
        
        <p>
            {answer}
        </p>
        
    </div>
}

export default Answer;