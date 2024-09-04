import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
    if (props.all > 0) {
        return (
            <div>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine name={"good"} value={props.good}/>
                        <StatisticLine name={"neutral"} value={props.neutral}/>
                        <StatisticLine name={"bad"} value={props.bad}/>
                        <StatisticLine name={"all"} value={props.all}/>
                        <StatisticLine name={"average"} value={props.average}/>
                        <StatisticLine name={"positive"} value={props.positive}/>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div>
                <h2>statistics</h2>
                <p>no feedback given</p>
            </div>
        )
    }
}

export default Statistics