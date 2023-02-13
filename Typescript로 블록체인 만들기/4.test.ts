type Words = {
  [key: string]: string
}
class Word {
  constructor(public term: string, public def: string) {}
}
class Dict {
  private words: Words
  constructor() {
    this.words = {}
  }

  add(term: string) {
    if (this.words[term] === undefined) {
      this.words[term] = ''
    }
  }

  get(term: string) {
    if (this.words[term] !== undefined) {
      return console.log(this.words[term])
    }
  }

  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term]
    }
  }

  update(term: string, def: string) {
    if (this.words[term] !== undefined) {
      this.words[term] = def
    }
  }

  showAll() {
    return Object.keys(this.words).forEach(ele => console.log(ele))
  }

  count() {
    return console.log(Object.keys(this.words).length)
  }
}

let dict = new Dict()
console.log('start')
dict.add('dog')
dict.update('dog', '개는 왈왈')
console.log('dict', dict)
dict.get('dog')
dict.delete('dog')
console.log('del 이후', dict)
dict.add('cat')
dict.update('cat', '고양이도 왈왈?')
dict.add('parrot')
dict.update('parrot', '앵무새 시끄러')
dict.showAll()
dict.count()
