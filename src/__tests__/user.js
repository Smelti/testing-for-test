import loadUser from "../loaderUser"; //подгружаем
import { httpGet } from "../http"; //загрушка
jest.mock('../http') //именно этот файл должен стать моком

beforeEach(() => {
    jest.resetAllMocks();
}) ///сбрасываем все моки(заглушки)
test('should call loadUser onse', () => {
    httpGet.mockReturnValue(JSON.stringify({})) //httpGet должен вернуть в строковом элементе объект
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1') //убедиться что функция была вызвана с параметром 1
})