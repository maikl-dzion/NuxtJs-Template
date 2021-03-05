export default function ({ $axios }, inject) {
  const api = $axios.create({
    headers: {
      // common: {Accept: 'text/plain, */*'}
    }
  })

  api.setBaseURL('http://bolderfest.ru/user-profile/api/v1')
  inject('api', api)
}
