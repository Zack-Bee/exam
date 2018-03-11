import ProcessPage from "../components/ProcessPage.jsx"
import { LOAD_QUESTIONS } from "../actions/loadQuestions"
import { ANALYSIS_DATA } from "../actions/analysisData"
import { SHOW_MAIN_PAGE } from "../actions/showMainPage"
import { LOAD_QUESTIONS_END } from "../actions/loadQuestionsEnd"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    switch (state.status) {
        case ANALYSIS_DATA: {
            return {
                text: "正在从文档解析数据",
                display: "block"
            }
        }
        case LOAD_QUESTIONS: {
            return {
                text: "正在加载题目",
                display: "block"
            }
        }
        case SHOW_MAIN_PAGE: {
            return {
                text: "现在是在主页的状态, 讲道理你应该看不到我",
                display: "none"
            }
        }
        case LOAD_QUESTIONS_END: {
            return {
                text: "题目加载完毕, 你应该也看不到我",
                display: "none"
            }
        }
        default: {
            return {
                text: "似乎出了什么错误",
                display: "block"
            }
        }
    }
}

export default connect(mapStateToProps)(ProcessPage)