import questionList from './questionList'
import { isValidKey } from '../core/tools'

/**
 * 根据传入题目对象返回题目列表
 * @param questionObj 问题对象，类似于questionList
 * @return 题目列表
 */
export const getQuestionByQuesObj = (questionObj: object): Array<string> => {
  let resArray: any = []
  for (const [_, value] of Object.entries(questionObj)) {
    if (Array.isArray(value)) {
      resArray = resArray.concat(value)
    } else {
      const qList = getQuestionByQuesObj(value)
      resArray = resArray.concat(qList)
    }
  }
  return resArray
}

/**
 * 根据路径返回题目列表
 * @param pathList 问题路径列表 ['八下', '第二单元', '第四课']
 * @return 题目列表
 */
export const getQuestionByPath = (
  pathList: Array<string>
): Array<string> | null => {
  var question = questionList
  for (var i = 0, len = pathList.length; i < len; i++) {
    const key = pathList[i]
    if (!isValidKey(key, question)) {
      return null
    }
    question = question[key]
  }
  // 是题目数组直接返回
  if (Array.isArray(question)) {
    return question
  }
  // 不是题目数组
  return getQuestionByQuesObj(question)
}
