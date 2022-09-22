//　{}で囲われたものは{}ごと削除し、ご自身の環境で当てはまる文字列を挿入してください。


// カレンダーIDはGoogleカレンダーの「設定と共有」から「カレンダー ID」をページ内検索してみてください。
const calendarId = '{カレンダーIDをここに貼り付けてください}'; 

function myFunction () {

  const calendar = CalendarApp.getCalendarById(calendarId);  

  var startDate = new Date(); 
  var endDate = new Date();
  
  // デフォルトでは、今日から2ヶ月間の出力にしています。
  endDate.setMonth(endDate.getMonth() + 2); 
   
  const events = calendar.getEvents(startDate, endDate);

  const values = [];
  
  for(const event of events){
  
    const record = [
      // ここでgethogeを色々追加すると、情報を増やせます。
      // ただ、その分スプシの列が増えるので、スプシでの上書きに注意です。
      event.getTitle(),
      event.getStartTime(),
      event.getEndTime(),
      event.getColor()
    ];
  
    values.push(record);
  
  }
 
  // スプシのIDは、スプシを開いたときのアドレスバーで、 spreadsheets/d/ のあとから /edit までの文字列のことです。
  // シートの名前は、デフォルトで「シート1」と名前がつくあれのことです。
  const SS = SpreadsheetApp.openById('{スプシのID}').getSheetByName('{シートの名前}') ;

  // 23行目で const record のなかで指定したものの数が4つだったら4でいいですが、例えば1つ増やしたら SS.getRange(2, 1, 3000, 5).clear(); となります。
  SS.getRange(2, 1, 3000, 4).clear();
  SS.getRange(2, 1, values.length, values[0].length).setValues(values);
 
}