def obj_to_post(obj):
    post = dict(vars(obj))

    # 딕셔너리를 스트링 형태로 직렬화 변환
    if obj.update_dt:
        post['update_dt'] = obj.update_dt.strftime('%Y-%m-%d %H:%M')
    else:
        post['update_dt'] = ""

    if obj.tags:
        post['tags'] = [tag.name for tag in obj.tags.all()]
    else:
        post['tages'] = []

    if obj.owner:
        post['owner'] = obj.owner.username
    else:
        post['owner'] = 'Anonymous'

    del post['_state']   # 클라이언테에 보낼 필요없는 _state 키는 삭제

    return post


def prev_next_post(obj):
    try:
        prevObj = obj.get_prev()
        prevDict = {'id': prevObj.id, 'title': prevObj.title}
    except obj.DoesNotExist as e:
        prevDict = {}

    try:
        nextObj = obj.get_next()
        nextDict = {'id': nextObj.id, 'title': nextObj.title}
    except obj.DoesNotExist as e:
        nextDict = {}

    return prevDict, nextDict

def make_tag_cloud(qsTag):
    minCount = min(tag.count for tag in qsTag)
    maxCount = max(tag.count for tag in qsTag)

    # minweight, maxweight = 1, 3

    def get_weight_func(minweight, maxweight):
        if minCount == maxCount:
            factor = 1.0
        else:
            factor = (maxweight - minweight) / (maxCount - minCount)

        def func(count):
            weight = round(minweight + factor *(count - minCount))
            return weight
        
        return func

    weight_func = get_weight_func(1, 3)
    taglist = []
    for tag in qsTag:
        weight = weight_func(tag.count)
        taglist.append({
            'name': tag.name,
            'count': tag.count,
            'weight':weight,
        })
    
    return taglist


