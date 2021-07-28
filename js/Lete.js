/**
 * Created by Lete on 2020/7/7.
 * Butterfly��3.4.0�汾��ȥ����jQuery
 * ע����ʹ�õ�jQuery������������
 * ������jQuery�����и���
 */


// ����ҳ�Ų���
$(document).ready(function(e) {
    // �Լ��������и���
    var since = 2019;
    var name = 'Iyui';
    var now = new Date();
    var nowYear = now.getFullYear();
    since = since == nowYear?since:since+" - "+nowYear;
    $('.copyright').html('?'+since+' <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> '+name);
});