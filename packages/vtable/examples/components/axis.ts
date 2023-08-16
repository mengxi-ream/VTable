import * as VTable from '../../src';
import { bindDebugTool } from '../../src/scenegraph/debug-tool';
const PivotTable = VTable.PivotTable;
const Table_CONTAINER_DOM_ID = 'vTable';

export function createTable() {
  const records = [
    {
      '10002': '197696.65970230103',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '上海',
      '221026124726014': '197696.65970230103',
      '221026124726016': '销售额',
      '221026124726017': '上海'
    },
    {
      '10002': '592',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '上海',
      '221026124726015': '592',
      '221026124726016': '数量',
      '221026124726017': '上海'
    },
    {
      '10002': '180672.12799072266',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '上海',
      '221026124726014': '180672.12799072266',
      '221026124726016': '销售额',
      '221026124726017': '上海'
    },
    {
      '10002': '263',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '上海',
      '221026124726015': '263',
      '221026124726016': '数量',
      '221026124726017': '上海'
    },
    {
      '10002': '204081.7786102295',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '上海',
      '221026124726014': '204081.7786102295',
      '221026124726016': '销售额',
      '221026124726017': '上海'
    },
    {
      '10002': '225',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '上海',
      '221026124726015': '225',
      '221026124726016': '数量',
      '221026124726017': '上海'
    },
    {
      '10002': '1050.4199981689453',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '中枢',
      '221026124726014': '1050.4199981689453',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '7',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '中枢',
      '221026124726015': '7',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '中枢',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '中枢',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '中枢',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '中枢',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '1194.4800186157227',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '大理',
      '221026124726014': '1194.4800186157227',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '11',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '大理',
      '221026124726015': '11',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '大理',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '大理',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '2058.8400268554688',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '大理',
      '221026124726014': '2058.8400268554688',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '4',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '大理',
      '221026124726015': '4',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '18585.420318603516',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '开化',
      '221026124726014': '18585.420318603516',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '40',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '开化',
      '221026124726015': '40',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '17330.711791992188',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '开化',
      '221026124726014': '17330.711791992188',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '16',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '开化',
      '221026124726015': '16',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '12081.4404296875',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '开化',
      '221026124726014': '12081.4404296875',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '14',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '开化',
      '221026124726015': '14',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '7984.760013580322',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '开远',
      '221026124726014': '7984.760013580322',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '41',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '开远',
      '221026124726015': '41',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '9894.219970703125',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '开远',
      '221026124726014': '9894.219970703125',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '13',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '开远',
      '221026124726015': '13',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '6963.739990234375',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '开远',
      '221026124726014': '6963.739990234375',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '7',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '开远',
      '221026124726015': '7',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '584.0800018310547',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '弥阳',
      '221026124726014': '584.0800018310547',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '5',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '弥阳',
      '221026124726015': '5',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '弥阳',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '弥阳',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '11281.200439453125',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '弥阳',
      '221026124726014': '11281.200439453125',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '10',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '弥阳',
      '221026124726015': '10',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '30930.62074279785',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '昆明',
      '221026124726014': '30930.62074279785',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '112',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '昆明',
      '221026124726015': '112',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '65854.31990814209',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '昆明',
      '221026124726014': '65854.31990814209',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '82',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '昆明',
      '221026124726015': '82',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '39752.88833618164',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '昆明',
      '221026124726014': '39752.88833618164',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '60',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '昆明',
      '221026124726015': '60',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '3895.3600006103516',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '昭通',
      '221026124726014': '3895.3600006103516',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '45',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '昭通',
      '221026124726015': '45',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '11474.539855957031',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '昭通',
      '221026124726014': '11474.539855957031',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '23',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '昭通',
      '221026124726015': '23',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '11766.523803710938',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '昭通',
      '221026124726014': '11766.523803710938',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '13',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '昭通',
      '221026124726015': '13',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '3582.5999145507812',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '景洪',
      '221026124726014': '3582.5999145507812',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '20',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '景洪',
      '221026124726015': '20',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '5625.47998046875',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '景洪',
      '221026124726014': '5625.47998046875',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '8',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '景洪',
      '221026124726015': '8',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '景洪',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '景洪',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '10907.96021270752',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '曲靖',
      '221026124726014': '10907.96021270752',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '15',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '曲靖',
      '221026124726015': '15',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '17613.81982421875',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '曲靖',
      '221026124726014': '17613.81982421875',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '19',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '曲靖',
      '221026124726015': '19',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '12120.86376953125',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '曲靖',
      '221026124726014': '12120.86376953125',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '13',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '曲靖',
      '221026124726015': '13',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '348.0399913787842',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '玉溪',
      '221026124726014': '348.0399913787842',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '5',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '玉溪',
      '221026124726015': '5',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '玉溪',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '玉溪',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '玉溪',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '玉溪',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '49.70000076293945',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '连然',
      '221026124726014': '49.70000076293945',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '1',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '连然',
      '221026124726015': '1',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '1182.719970703125',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '连然',
      '221026124726014': '1182.719970703125',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '3',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '连然',
      '221026124726015': '3',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '2021.8800048828125',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '连然',
      '221026124726014': '2021.8800048828125',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '3',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '连然',
      '221026124726015': '3',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '14435.26010131836',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '龙泉',
      '221026124726014': '14435.26010131836',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '45',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '龙泉',
      '221026124726015': '45',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '21053.480499267578',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '龙泉',
      '221026124726014': '21053.480499267578',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '12',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '龙泉',
      '221026124726015': '12',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '19300.399871826172',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '龙泉',
      '221026124726014': '19300.399871826172',
      '221026124726016': '销售额',
      '221026124726017': '云南'
    },
    {
      '10002': '18',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '龙泉',
      '221026124726015': '18',
      '221026124726016': '数量',
      '221026124726017': '云南'
    },
    {
      '10002': '6081.908012390137',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '东胜',
      '221026124726014': '6081.908012390137',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '17',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '东胜',
      '221026124726015': '17',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '2744.307891845703',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '东胜',
      '221026124726014': '2744.307891845703',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '8',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '东胜',
      '221026124726015': '8',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '3939.8519287109375',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '东胜',
      '221026124726014': '3939.8519287109375',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '6',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '东胜',
      '221026124726015': '6',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '3507.3360443115234',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '丰镇',
      '221026124726014': '3507.3360443115234',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '7',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '丰镇',
      '221026124726015': '7',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '丰镇',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '丰镇',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '丰镇',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '丰镇',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '5003.011922836304',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '乌海',
      '221026124726014': '5003.011922836304',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '22',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '乌海',
      '221026124726015': '22',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '10494.372100830078',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '乌海',
      '221026124726014': '10494.372100830078',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '23',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '乌海',
      '221026124726015': '23',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '599.2559814453125',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '乌海',
      '221026124726014': '599.2559814453125',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '3',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '乌海',
      '221026124726015': '3',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '3474.659912109375',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '乌达',
      '221026124726014': '3474.659912109375',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '9',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '乌达',
      '221026124726015': '9',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '乌达',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '乌达',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '乌达',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '乌达',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '400.9599914550781',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '加格达奇',
      '221026124726014': '400.9599914550781',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '8',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '加格达奇',
      '221026124726015': '8',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '1400.364013671875',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '加格达奇',
      '221026124726014': '1400.364013671875',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '3',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '加格达奇',
      '221026124726015': '3',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '加格达奇',
      '221026124726014': null,
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': null,
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '加格达奇',
      '221026124726015': null,
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '18076.2964553833',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '包头',
      '221026124726014': '18076.2964553833',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '90',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '包头',
      '221026124726015': '90',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '19541.4520111084',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '包头',
      '221026124726014': '19541.4520111084',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '29',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '包头',
      '221026124726015': '29',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '5599.776092529297',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '包头',
      '221026124726014': '5599.776092529297',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '11',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '包头',
      '221026124726015': '11',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '14713.831783294678',
      '10003': '221026124726014',
      '221026124726008': '办公用品',
      '221026124726011': '呼和浩特',
      '221026124726014': '14713.831783294678',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '97',
      '10003': '221026124726015',
      '221026124726008': '办公用品',
      '221026124726011': '呼和浩特',
      '221026124726015': '97',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '11437.607940673828',
      '10003': '221026124726014',
      '221026124726008': '家具',
      '221026124726011': '呼和浩特',
      '221026124726014': '11437.607940673828',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '26',
      '10003': '221026124726015',
      '221026124726008': '家具',
      '221026124726011': '呼和浩特',
      '221026124726015': '26',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '1604.8200073242188',
      '10003': '221026124726014',
      '221026124726008': '技术',
      '221026124726011': '呼和浩特',
      '221026124726014': '1604.8200073242188',
      '221026124726016': '销售额',
      '221026124726017': '内蒙古'
    },
    {
      '10002': '5',
      '10003': '221026124726015',
      '221026124726008': '技术',
      '221026124726011': '呼和浩特',
      '221026124726015': '5',
      '221026124726016': '数量',
      '221026124726017': '内蒙古'
    }
  ];
  const option: VTable.PivotTableConstructorOptions = {
    rowTree: [
      {
        dimensionKey: '221026124726017',
        value: '上海',
        children: [
          {
            dimensionKey: '221026124726011',
            value: '上海'
          }
        ]
      },
      {
        dimensionKey: '221026124726017',
        value: '云南',
        children: [
          {
            dimensionKey: '221026124726011',
            value: '中枢'
          },
          {
            dimensionKey: '221026124726011',
            value: '大理'
          },
          {
            dimensionKey: '221026124726011',
            value: '开化'
          },
          {
            dimensionKey: '221026124726011',
            value: '开远'
          },
          {
            dimensionKey: '221026124726011',
            value: '弥阳'
          },
          {
            dimensionKey: '221026124726011',
            value: '昆明'
          },
          {
            dimensionKey: '221026124726011',
            value: '昭通'
          }
        ]
      },
      {
        dimensionKey: '221026124726017',
        value: '内蒙古',
        children: [
          {
            dimensionKey: '221026124726011',
            value: '东胜'
          },
          {
            dimensionKey: '221026124726011',
            value: '丰镇'
          },
          {
            dimensionKey: '221026124726011',
            value: '乌海'
          },
          {
            dimensionKey: '221026124726011',
            value: '乌达'
          },
          {
            dimensionKey: '221026124726011',
            value: '加格达奇'
          },
          {
            dimensionKey: '221026124726011',
            value: '包头'
          },
          {
            dimensionKey: '221026124726011',
            value: '呼和浩特'
          }
        ]
      }
    ],
    columnTree: [
      {
        dimensionKey: '221026124726008',
        value: '办公用品',
        children: [
          {
            value: '销售额',
            indicatorKey: '221026124726014'
          },
          {
            value: '数量',
            indicatorKey: '221026124726015'
          }
        ]
      },
      {
        dimensionKey: '221026124726008',
        value: '家具',
        children: [
          {
            value: '销售额',
            indicatorKey: '221026124726014'
          },
          {
            value: '数量',
            indicatorKey: '221026124726015'
          }
        ]
      },
      {
        dimensionKey: '221026124726008',
        value: '技术',
        children: [
          {
            value: '销售额',
            indicatorKey: '221026124726014'
          },
          {
            value: '数量',
            indicatorKey: '221026124726015'
          }
        ]
      }
    ],
    rows: [
      {
        dimensionKey: '221026124726017',
        dimensionTitle: '省/自治区'
      },
      {
        dimensionKey: '221026124726011',
        dimensionTitle: '城市',
        isAxis: true
      }
    ],
    columns: [
      {
        dimensionKey: '221026124726008',
        dimensionTitle: '类别'
      },
      {
        dimensionKey: '221026124726016',
        dimensionTitle: '指标名称 '
      }
    ],
    indicators: [
      {
        indicatorKey: '221026124726014',
        caption: '销售额',
        width: 100,
        showSort: false,
        isAxis: true
      },
      {
        indicatorKey: '221026124726015',
        caption: '数量',
        width: 100,
        showSort: false,
        isAxis: true
      }
    ],
    corner: {
      titleOnDimension: 'row',
      headerStyle: {
        textStick: true
      }
    },
    container: document.getElementById(Table_CONTAINER_DOM_ID),
    records,
    showFrozenIcon: false, //显示VTable内置冻结列图标
    widthMode: 'standard', // 宽度模式：standard 标准模式； adaptive 自动填满容器
    defaultRowHeight: 80,
    defaultColWidth: 100,
    columnResizeType: 'indicator', // 'column' | 'indicator' | 'all'
    dragHeaderMode: 'all'
  };

  const instance = new PivotTable(option);

  const { PIVOT_SORT_CLICK } = VTable.PivotTable.EVENT_TYPE;
  instance.on(PIVOT_SORT_CLICK, e => {
    const order = e.order === 'asc' ? 'desc' : e.order === 'desc' ? 'normal' : 'asc';
    instance.updatePivotSortState([{ dimensions: e.dimensionInfo, order }]);
  });

  bindDebugTool(instance.scenegraph.stage as any, {
    customGrapicKeys: ['role', '_updateTag']
  });

  // 只为了方便控制太调试用，不要拷贝
  (window as any).tableInstance = instance;
}
