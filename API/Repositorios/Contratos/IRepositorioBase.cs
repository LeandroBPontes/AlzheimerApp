using System;
using System.Collections.Generic;

namespace AlzheimerApp.Repositorios {
    public interface IRepositorioBase<T, TPrimary> : IDisposable {
        IEnumerable<T> Get();
        T GetByID(TPrimary id);
        void Insert(T model);
        void Delete(TPrimary id);
        void Update(T model);
    }
}
