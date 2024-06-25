const Questions = (props: any) => {
    const { question } = props;
    
    if(question.length === 0) {
        return <></>;
    }

    return <div className="flex w-full justify-end">
        <div className="flex items-center h-[35px] p-[15px] bg-[#BCE3F8] rounded-full margin">
            {question}
        </div>
    </div>
}

export default Questions;