//! 추상 클래스 : 다른 클래스가 상속받을 수 있음 하지만 직접 인스턴스는 못만들음
//? 즉, new User은 불가능함
abstract class User {
  constructor(private firstName: string, private lastName: string, public nickName: string) {}
  private getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
class People extends User {}
const manseon = new People('choi', 'man', 'fullfish')
manseon.nickName
manseon.firstName // 이건 private라 안됨
manseon.getFullName()

// private로 만들면 상속받았어도 해당 프로퍼티에 접근을 못함
// 필드가 외부로부터 보호되지만 다른 자식 클래스에서 사용되기를 원한다면 protected를 써야함
