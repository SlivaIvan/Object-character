import Character from '../character';

test('Проверяем работу родителя Character', () => {
  const unit = new Character('Иван', 'Bowerman');
  const expected = {
    name: 'Иван', type: 'Bowerman', health: 100, level: 1,
  };

  expect(unit).toEqual(expected);
});

test('Проверяем работу ошибки длинны имени', () => {
  function chTest() {
    const charactTest = new Character('ИвановИванИванович', 'Bowerman');
    return charactTest;
  }
  expect(chTest).toThrow('имя должно содержать от 2 до 10 сиволов');
});

test('Проверяем работу ошибки длинны имени', () => {
  function chTest() {
    const charactTest = new Character('Иван', 'Boweman');
    return charactTest;
  }
  expect(chTest).toThrow('тип не установлен');
});
