<template>
    <div>
      {{name}}{{id}}
    </div>
</template>

<script>
export default {
  head: {
    title: 'ABOUT',
    meta: [
      { hid: 'description', name: 'description', content: '这是ABOUT的描述' }
    ]
  },
  data: () => {
    return {
      name: 'world',
      id: 90,
      mes: 'aaa'
    }
  }
}
</script>
