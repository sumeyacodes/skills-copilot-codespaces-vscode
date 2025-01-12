function skillsMembers() {
    return {
        members: [
            { name: 'John', skills: ['JavaScript', 'React'] },
            { name: 'Jane', skills: ['JavaScript', 'Angular'] },
            { name: 'Jack', skills: ['HTML', 'CSS'] },
        ],
        getMembersBySkill: function(skill) {
            return this.members.filter(member => member.skills.includes(skill));
        }
    }
}