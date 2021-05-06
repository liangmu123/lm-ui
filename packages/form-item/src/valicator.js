const valicator = {
  requiredValicate (value) {
    if (Array.isArray(value)) {
      return value.length > 0
    }
    return value !== undefined && value !== null && value !== ''
  }
}

export default function valicate (value, rules, data) {
  if (!rules || !Array.isArray(rules)) {
    console.error('校验器要求单条属性 规则必须是数组')
    return true
  }
  let rule = null
  for (let i = 0; i < rules.length; i++) {
    rule = rules[i]
    if (rule.required) {
      if (valicator.requiredValicate(value)) {
        continue
      } else {
        return {
          data: rule
        }
      }
    }
    if (rule.validator) {
      if (rule.validator(value, data)) {
        continue
      } else {
        return {
          data: rule
        }
      }
    }
  }
  return true
}
