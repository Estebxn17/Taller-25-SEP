module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Adopcions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      perro_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Perros', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      adoptante_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Adoptantes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      fecha_adopcion: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Adopcions');
  }
};
