import Page from '../dtos/page'

export default class PageAPI {
  static async Create(title: string, comment: string, location: string, content: string, createdBy: string) {
    const page: Page = {
      id: null,
      title: title,
      comment: comment,
      location: location,
      content: content,
      created: null,
      created_by: createdBy,
      last_modified: null,
      last_modified_by: null
    }

    return fetch('/page',
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(page)
      }
    )
  }

  static async Get(location: string) {
    return fetch(`/page?location=${location}`)
  }
}
