<template>
  <view class="uni-container">
    <uni-forms ref="form" :value="formData" validateTrigger="bind">
      <uni-forms-item name="name" label="名称" required>
        <uni-easyinput placeholder="名称" v-model="formData.name"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="volumn" label="容量" required>
        <uni-easyinput placeholder="容量" v-model="formData.volumn"></uni-easyinput>
      </uni-forms-item>
	  <uni-forms-item name="introduce" label="介绍" required>
	    <uni-easyinput placeholder="介绍" v-model="formData.introduce"></uni-easyinput>
	  </uni-forms-item>
	  <uni-forms-item name="category" label="类别" required>
	    <uni-easyinput placeholder="类别" v-model="formData.category"></uni-easyinput>
	  </uni-forms-item>
	  <uni-forms-item name="time_consuming" label="耗时" required>
	    <uni-easyinput placeholder="耗时" v-model="formData.time_consuming"></uni-easyinput>
	  </uni-forms-item>
	  <uni-forms-item name="comment" label="备注" required>
	    <textarea placeholder="备注" @input="binddata('comment', $event.detail.value)" 
		class="uni-textarea-border" v-model="formData.comment"></textarea>
	  </uni-forms-item>
     
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '@/js_sdk/validator/uni-id-tag.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'property-statistics-management';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  export default {
    data() {
      let formData = {
        "name": "",
        "volumn": "",
        "introduce": "",
		"category": "",
		"time_consuming": "",
		"comment": ""
      }
      return {
        formData,
        formOptions: {},
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          this.getOpenerEventChannel().emit('refreshCheckboxData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>
<style>
	::v-deep .uni-forms-item__label {
		width: 90px !important;
	}
</style>
